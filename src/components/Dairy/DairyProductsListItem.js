import { useDispatch, useSelector } from "react-redux"
import { selectDiary } from "redux/selectors";
import { deleteDiaryEntry } from "../../redux/diary/diaryOperations"

export const DairyProductsListItem = () => {

    const dispatch = useDispatch()
    const list = useSelector(selectDiary);

    function deleteItem(e) {
        dispatch(deleteDiaryEntry(e.target.dataset.id))
    }
    return (<>
        <h1>hello</h1>
        { list.date}date
        {JSON.stringify(list)}
        {list?.inputDiary.map(({ name, id, weight, title, calories }) => <li id={id}>
            <span>{name}</span><span>{weight}</span><span>{calories}</span><button type="button" data-id='id' onClick={deleteItem}>X</button>
        </li>)}
    </>)
}