const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      vehicles: [],
      people: [],
      planets: [],
      peopleData: [],
      planetsData: {},
    },
    actions: {
      // Use getActions to call a function within a fuction

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadDataPlanets: async () => {
        fetch("https://www.swapi.tech/api/planets?page=1&limit=60")
          .then((resp) => resp.json())
          .then((data) => setStore({ planets: data.results }));
      },

      loadDataAllPlanets: async (uid) => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ planetsData: data.result.properties }));
      },
      loadDataAllPeople: async (uid) => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ peopleData: data.result.properties }));
      },

      loadDataPeople: async () => {
        fetch("https://www.swapi.tech/api/people?page=1&limit=80")
          .then((resp) => resp.json())
          .then((data) => setStore({ people: data.results }));
      },

      getMessage: async () => {
        try {
          // fetching data from the backend
          const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
          const data = await resp.json();
          setStore({ message: data.message });
          // don't forget to return something, that is how the async resolves
          return data;
        } catch (error) {
          console.log("Error loading message from backend", error);
        }
      },
      changeColor: (index, color) => {
        //get the store
        const store = getStore();

        //we have to loop the entire demo array to look for the respective index
        //and change its color
        const demo = store.demo.map((elm, i) => {
          if (i === index) elm.background = color;
          return elm;
        });

        //reset the global store
        setStore({ demo: demo });
      },
    },
  };
};

export default getState;
