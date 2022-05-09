import React, { useEffect } from "react";
import { useState } from "react";

import "./Filters.css";

const DISCOVERSEARCH = "https://api.themoviedb.org/3/discover/movie?api_key=a18a4c3abe6c63b9d003880cedebf790";

const Filter = ({ setGenre, genre, setYear, year, setSort, sort, genres}) => {
    

    
    return (
        <div id="filter" className="toolbar">
            <div>
                Kategoriler:      
                <select className="genres" value={genre} onChange={(e) => setGenre(e.target.value)} >
                    <option value="" className="genre">Tüm Kategoriler</option>
                    {genres ? genres.map((genre , i) => (
                        <option key={i} className="genres" value={genre.id}>{genre.name}</option >
                    ))
                     : ""}
                </select>
            </div>
            <div>
                Sırala:      
                <select className="sortby" value={sort} onChange={(e) => setSort(e.target.value)}>
                    <option className="sort" value="popularity.desc">Popülerlik(Önce En Yüksek)</option>
                    <option className="sort" value="popularity.asc">Popülerlik(Önce En Düşük)</option>
                    <option className="sort" value="release_date.desc">Yayın Tarihi(Önce En Yüksek)</option>
                    <option className="sort" value="release_date.asc">Yayın Tarihi(Önce En Düşük)</option>
                    <option className="sort" value="revenue.desc">Kazanç (Önce En Yüksek)</option>
                    <option className="sort" value="revenue.asc">Kazanç (Önce En Düşük)</option>
                </select>
            </div>
            <div>
                Yıl:      
                <input className="year input-year" name="year" value={year} onChange ={(e) => setYear(e.target.value)} type="number" min="1900" max="2099" step="1" placeholder="Yıl Giriniz"/>
            </div>
        </div>
    );    
};

export default Filter;