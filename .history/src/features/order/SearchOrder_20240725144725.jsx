import {useState} from 'react';
import { useNavigation } from 'react-router-dom';
export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigation()

    function handleSubmit(e) {
        e.preventDefault();
        if (!query) return;
        navigate('/order/' + query)
        setQuery("")
    }
    return (
        <form onSubmit={handleSubmit}>
            <input  placeholder="Search order #"
                    value={query}
                    onChange={e => setQuery(e.target.value)} />
            
        </form>
    )
}