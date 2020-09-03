import {create} from 'zustand'
    
const [useStore] = create(set => ({
    open: '',
    
    update: (prop) => {
        alert("hello")
        console.log(prop)
       console.log(set({open: prop}))
   
    }
       
        
  }))

  export  {useStore};