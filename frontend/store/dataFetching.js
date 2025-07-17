import { defineStore } from "pinia";
export const FetchedData = defineStore("FetchedData", {
  state: () => {
    data: [];
    singlePageData: {
    }
  },
  actions: {
   async FetchedData() {
     const res= await fetch("http://localhost:5000/api/posts");
     this.data = await res.json();
    //  console.log(await res.json())
       
    },
    async singlePage(id) {
      try{

        fetch("https://dummyjson.com/posts/" + id)
        .then((res) => res.json())
        .then( (data) => {
          this.singlePageData = data;
          console.log(data);
        });
        
      }
      catch(e){
        console.log(e)
      }
    },
  },
});
