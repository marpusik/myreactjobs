import FilterTitle from "./filterTitle/filterTitle";
import s from "./filter.module.scss";
import FilterAccordion from "./filterAccordion/filterAccordion";

function Filter() {
    return (
        <>
        <header className={s.header}>
            <FilterTitle text="Параметры"/>
            <FilterTitle text="По марке"/>
            
        </header>
        <FilterAccordion title="Наличие"/>
        </>
    );
}

export default Filter;