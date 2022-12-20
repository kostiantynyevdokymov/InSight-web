export const DairyForm = () => {
    const arr = []
    function searchInBase(e) {
        if (e.target.dataset !== 'dairyproduct') return
        const form = document.querySelector('dairyproduct')
        // send to base str 
        arr.forEach(el=>el.title.ua === form.elements.value)
        // return arr = res.arr
    }
    function sendMarktoBase(e) {

        
    }
    return (<>
        <form id='dairyform' onChange={searchInBase} onSubmit={sendMarktoBase}>
            <input id='dairyproduct' name='dairyproduct' data-name='dairyproduct' placeholder="Enter product name" />
            {arr && arr.length>0 && (<ListOfProducts arr={arr} />)}
            <input id='dairyweight' name='dairyweight' placeholder="Enter product name" />
            <button>Add</button>
        </form>
    </>)
}

const ListOfProducts = (arr) => {
    return (<ul>
        {arr.map(({ title: { ua } }) => {
            return <li>{ua}</li>
        })}
    </ul>)
}