export default function SearchOrder() {
    const [query, setQuery] = useState("");
    return (
        <Input placeholder="Search order #" value={query} onChange={e=> setQuery(e.target.value)} />
    );
}