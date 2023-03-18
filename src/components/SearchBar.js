import styles from "./SearchBar.css";

function SearchBar (props) {
    const { placeholder, width, onChange } = props;
    return (
            <div className="box" style={{width: width + 'px'}}>
                {/* <i className="fa-light fa-magnifying-glass" aria-hidden="true"></i> */}
                {/* <div className="material-symbols-outlined">search</div> */}
                    <input 
                        className="searchBar" 
                        type="text" 
                        placeholder={placeholder} 
                        style={{width: width-60 + 'px'}}
                        onChange={onChange}/>
            </div>
        
    )
}

export default SearchBar;
