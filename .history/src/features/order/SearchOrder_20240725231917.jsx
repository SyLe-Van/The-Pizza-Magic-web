import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
export default function SearchOrder() {
    const [query, setQuery] = useState("");
    const navigate = useNavigate()

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
                className='w-28 rounded-full bg-yellow-100 px-4 py-2 text-sm placeholder:text-stone-400'
                onChange={e => setQuery(e.target.value)} />
            
            
        </form>
    )
}