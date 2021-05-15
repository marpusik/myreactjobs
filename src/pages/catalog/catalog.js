
import React from 'react';

import Title from '../../components/title/Title';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import BorderAllIcon from '@material-ui/icons/BorderAll';
import s from './catalog.module.scss';
import SelectParam from './selectParam/selectParam';
import Card from '../../components/card/Card';
import bag from '../../assets/images/shopItems/spare-parts/bag.png';
import airflow from './../../assets/images/shopItems/spare-parts/airflow.png';
import brp from './../../assets/images/shopItems/spare-parts/brp.png';
import equipment from './../../assets/images/shopItems/spare-parts/equipment.png';
import Pagination from '@material-ui/lab/Pagination';
import Breadcrumb from '../../components/breadcrumb/Breadcrumb';



function Catalog() {
  return (

    <main className={s.catalog}>
      <Breadcrumb />
      <Title
        text="Гидроциклы"
      />
      <div className={s.wrapperHead}>
        <div className={s.selectParam}>
          <SelectParam
            text="Полноприводные"
          />
          <SelectParam
            text="от 5000"
          />
          <SelectParam
            text="BRP"
          />
          <SelectParam
            text="еще"
          />
        </div>
        <form className={s.list}>
          <select className={s.items}>

            <option className={s.item}>По популярности</option>
            <option className={s.item}>По рейтингу</option>
            <option className={s.item}>Новинки</option>
          </select>
          <BorderAllIcon />
          <FormatListBulletedIcon color="disabled" />
        </form>
      </div>
      <section className={s.content}>
        <aside className={s.filter}>
          CONTENT FILTER
        </aside>
        <div className={s.card}>
          <Card img={bag} title="Водонепроницаемый Рюкзак" price="9 800" />
          <Card img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900" />
          <Card img={brp} title="BRP Audio-Premium System" price="68 000" />
          <Card img={equipment} title="Спасательное снаряжение" />
          <Card img={bag} title="Водонепроницаемый Рюкзак" price="9 800" />
          <Card img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900" />
          <Card img={brp} title="BRP Audio-Premium System" price="68 000" />
          <Card img={equipment} title="Спасательное снаряжение" />
          <Card img={bag} title="Водонепроницаемый Рюкзак" price="9 800" />
          <Card img={airflow} title="Спасательный жилет BRP Men's Airflow PFD" price="6 900" />
          <Card img={brp} title="BRP Audio-Premium System" price="68 000" />
          <Card img={equipment} title="Спасательное снаряжение" />
        </div>
      </section>
      <div className={s.pagination}>
        <Pagination count={10} shape="rounded" hidePrevButton hideNextButton color="primary" />

      </div>
    </main>

  );
}

export default Catalog;
