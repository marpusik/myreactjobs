import s from "./filterTitle.module.scss";

function FilterTitle(props) {
    return (
        <>
        <h3 className={s.title}>{props.text}</h3>
        </>
    );
}

export default FilterTitle;