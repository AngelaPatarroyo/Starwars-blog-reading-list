const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      message: null,
      vehicles: [],
      people: [],
      planets: [],
      species: [],
      peopleData: [],
      planetsData: [],
      vehiclesData: [],
    },
    actions: {
      // Use getActions to call a function within a fuction

      exampleFunction: () => {
        getActions().changeColor(0, "green");
      },

      loadDataPlanets: async (numPage = 1) => {
        fetch(`https://www.swapi.tech/api/planets?page=${numPage}&limit=10`)
          .then((resp) => resp.json())
          .then((data) => setStore({ planets: data.results }));
      },

      loadDataAllPlanets: async (uid) => {
        fetch(`https://www.swapi.tech/api/planets/${uid}`)
          .then((resp) => resp.json())
          .then((data) => {
            setStore({
              planetsData: data.result.properties,
            });
          })
          .catch((err) => console.log(err));
      },
      loadDataAllPeople: async (uid) => {
        fetch(`https://www.swapi.tech/api/people/${uid}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ peopleData: data.result.properties }));
      },

      loadDataPeople: async (numPage = 1) => {
        fetch(`https://www.swapi.tech/api/people?page=${numPage}&limit=10`)
          /* el numero de la pagina se vuelve dinamico, en el parametro le pasamos lo que queremos que sea dinamico y en donde empieza, en este caso en 1. Esto para la paginación */
          .then((resp) => resp.json())
          .then((data) => setStore({ people: data.results }));
      },
      loadDataVehicles: async (numPage = 1) => {
        fetch(`https://www.swapi.tech/api/vehicles?page=${numPage}&limit=10`)
          .then((resp) => resp.json())
          .then((data) => setStore({ vehicles: data.results }));
      },
      loadDataAllVehicles: async (uid) => {
        fetch(`https://www.swapi.tech/api/vehicles/${uid}`)
          .then((resp) => resp.json())
          .then((data) => setStore({ vehiclesData: data.result.properties }));
      },

      loadDataSpecies: async (numPage = 1) => {
        fetch(`https://www.swapi.tech/api/species?page=${numPage}&limit=10`)
          .then((resp) => resp.json())
          .then((data) => setStore({ species: data.results }));
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
