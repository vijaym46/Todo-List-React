  import Header from "./Header";
  import SearchItem from "./SearchItem";
  import Content from "./Content";
  import Footer from "./Footer";
  import { useState, useEffect } from 'react';
  import Additems from "./Additems";
  import apiRequest from "./apiRequest";

  function App() {

    const API_URL = 'http://localhost:3000/items';
    const [items, setItems] = useState([])
    const [newItem, setNewItem] = useState('')
    const [search, setSearch] = useState('')
    /* const [fetchError, setFetchError] = useState(null);
    const [isLoading, setIsLoading] = useState(true) */

    useEffect( () => {
      const fetchItems = async () => {
        try {
          const response = await fetch(API_URL);
          if(!response.ok) throw Error("Data not received")
          const listItems = await response.json();
          console.log(listItems);
          setItems(listItems);
          /* setFetchError(null); */
        } catch (err) {
          console.log(err.message)
        } /* finally {
          setIsLoading(false)
        } */
      }
      (async() => await fetchItems())()
      /* setTimeout(() => {
        (async() => await fetchItems())()
      }, 2000) */
    }, [])
    

    const addItem = async (item) => {
      const id = items.length ? items[items.length - 1].id + 1 : 1;
      const addNewItem = {id, checked:false, item}
      const listItems = [...items, addNewItem]
      setItems(listItems)

      const postOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(addNewItem)
      }

      const result = await apiRequest(API_URL, postOptions)
      if(result) console.log(result)
      /* localStorage.setItem("todo_list", JSON.stringify(listItems)) */
    } 

    const handleCheck = async (id) => {
      const listItems = items.map((item) => 
      item.id === id ? {...item, checked:!item.checked} : item
      )
      setItems(listItems)
      /* localStorage.setItem("todo_list", JSON.stringify(listItems)) */

      const myItem = listItems.filter((item) => item.id === id)

      const updateOptions = {
        method: 'PATCH',
        headers: {
          'Content-Type':'application/json' 
        },
        body: JSON.stringify({checked:myItem[0].checked})
      }

      const reqUrl = `${API_URL}/${id}`
      const result = await apiRequest(reqUrl, updateOptions)
      if(result) console.log(result);
    }

    const handleDelete = async (id) => {
      const listItems = items.filter((item) => 
      item.id !== id
      )
      setItems(listItems)
      /* localStorage.setItem("todo_list", JSON.stringify(listItems)) */

      const deleteOptions = {
        method: 'DELETE'
      }

      const reqUrl = `${API_URL}/${id}`
      const result = await fetch(reqUrl,deleteOptions)
      /* if(result) console.log(result) */
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (!newItem) return
      console.log(newItem)
      addItem(newItem)
      setNewItem('')
    }

    return (
      <div className="App container-fluid"> 
          <div className="row my-3 heading">
            <div className="col">
              <Header title = "Todo List"/>
            </div>
            <div className="col mt-4">
              <Additems
                newItem = {newItem}
                setNewItem = {setNewItem}
                handleSubmit = {handleSubmit}
              />
            </div>
          </div>

          <SearchItem
            search = {search}
            setSearch = {setSearch}
          />
          
          <main>
          <Content 
            items = {items.filter(item => (item.item).toLowerCase().includes(search.toLowerCase()))}
            handleCheck = {handleCheck}
            handleDelete = {handleDelete}
            setItems = {setItems}
          />
          </main>

          <Footer 
            length = {items.length}
          />
      </div>
    );
  }

  export default App;
