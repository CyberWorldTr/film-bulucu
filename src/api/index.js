import axios from "axios";

const GENRESAPI =
	"https://api.themoviedb.org/3/genre/movie/list?api_key=a18a4c3abe6c63b9d003880cedebf790&language=tr-TR";


    export const getMovies = async (url) => {
	try {
		const {
			data: { results },
		} = await axios.get(url);
		console.log(results);
		return results;
	} catch (error) {
		return error;
	}
};

export const getGenres = async () => {
	try {
		const {
			data: { genres },
		} = await axios.get(GENRESAPI);
		return genres;
	} catch (error) {
		return error;
	}
};

export const findGenre = async (id) => {
	try {
		const {
			data: { genres },
		} = await axios.get(GENRESAPI);

		for (let i = 0; i <= genres.length; i++) {
			if (id === genres[i].id) {
				return genres[i].name;
			} else {
				return "No Genre";
			}
		}
	} catch (error) {
		return error;
	}
};

export const findMovie = async (id) => {
	try {
		const { data } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}?api_key=a18a4c3abe6c63b9d003880cedebf790&language=tr-TR`
		);
		return data;
	} catch (error) {
		return error;
	}
};

export const getRecommended = async (id) => {
	try {
		const { data: { results } } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=a18a4c3abe6c63b9d003880cedebf790&language=tr-TR&page=1`
		);
		return results;
	} catch (error) {
		return error;
	}
};

export const getRecommended2 = async (movieIds) => {
	try {
		//const movieIds = [482321, 512195];
		const results = 
		Promise.all(movieIds.map(id => axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=a18a4c3abe6c63b9d003880cedebf790&language=tr-TR`)))
			.then(results => {
				return results.map(result => result.data);
			}
		);
		return results;
	} catch (error) {
		return error;
	}
};

export const getCast = async (id) => {
	try {
		const { data: { cast } } = await axios.get(
			`https://api.themoviedb.org/3/movie/${id}/casts?api_key=a18a4c3abe6c63b9d003880cedebf790`
		);
		return cast;
	} catch (error) {
		return error;
	}
};
export const getComments = async () => {
	return [
	  {
		id: "1",
		body: "İlk Yorum",
		username: "User1",
		userId: "1",
		parentId: null,
		createdAt: "2021-08-16T23:00:33.010+02:00",
	  },
	  {
		id: "2",
		body: "İkinci Yorum",
		username: "User2",
		userId: "2",
		parentId: null,
		createdAt: "2021-08-16T23:00:33.010+02:00",
	  },
	  {
		id: "3",
		body: "ilk yorumun ilk cevabı",
		username: "User1",
		userId: "2",
		parentId: "1",
		createdAt: "2022-08-16T23:00:33.010+02:00",
	  },
	  {
		id: "4",
		body: "ikinci yorumun ilk cevabı",
		username: "User3",
		userId: "2",
		parentId: "2",
		createdAt: "2021-08-16T23:00:33.010+02:00",
	  },
	];
  };
  
  export const createComment = async (text, parentId = null) => {
	return {
	  id: Math.random().toString(36).substr(2, 9),
	  body: text,
	  parentId,
	  userId: "1",
	  username: "Cyber",
	  createdAt: new Date().toISOString(),
	};
  };
  
  export const updateComment = async (text) => {
	return { text };
  };
  
  export const deleteComment = async () => {
	return {};
  };