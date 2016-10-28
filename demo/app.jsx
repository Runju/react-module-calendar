import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Calendar from '../src/';
import style from './style.sass';

const {
  store,
  Title,
  VisibleDateTable,
  goLastMonth,
  goNextMonth,
} = Calendar;

const weekNamed = {
  Su: '日',
  Mo: '月',
  Tu: '火',
  We: '水',
  Th: '木',
  Fr: '金',
  Sa: '土',
};
function onClick({ date }) {
  console.log('onClick', date);
}

render(
  <Provider store={store}>
    <div>
      <header>
        <button type="button" onClick={goLastMonth}>last</button>
        <button type="button" onClick={goNextMonth}>next</button>
        <Title
          format="YYYY年MM月"
          classname={style.title}
        />
      </header>
      <VisibleDateTable
        classname={style.dateTable}
        todayClassName={style.today}
        otherMonthClassName={style.otherMonth}
        selectedClassName={style.selected}
        clickCallback={onClick}
        config={{
          firstDayOfTheWeek: 1,
          weekNamed,
        }}
      />
    </div>
  </Provider>,
  document.getElementById('root')
);
