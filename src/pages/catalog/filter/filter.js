import FilterTitle from "./filterTitle/filterTitle";
import s from "./filter.module.scss";
import FilterAccordion from "./filterAccordion/filterAccordion";
import Brand from "./filterAccordion/brand/brand";
import Model from "./filterAccordion/model/model";
import Available from "./filterAccordion/available/available";
import NewProducts from "./filterAccordion/newProducts/newProducts";
import Price from "./filterAccordion/price/price";
import Sale from "./filterAccordion/sale/sale";

import Countries from "./filterAccordion/countries/countries";

function Filter() {
    const active = true;
    return (
        <>
        <header className={s.header}>
            <FilterTitle 
            active={active}
            text="Параметры"/>
            <FilterTitle text="По марке"/>
            
        </header>
        <FilterAccordion title="Наличие"
        content={<Available/>}
        />
        <FilterAccordion title="Новинки"
        content={<NewProducts/>}
        />
        <FilterAccordion title="Цена"
        content={<Price/>}
        />
        <FilterAccordion title="Бренд"
        content={<Brand/>}
        />
        <FilterAccordion title="Модель"
        content={<Model/>}
        />
        <FilterAccordion title="Акции"
        content={<Sale/>}
        />
        <FilterAccordion title="Страны"
        content={<Countries/>}
        />
        </>
    );
}

export default Filter;