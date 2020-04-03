import React from 'react';
import DatePicker from 'react-native-datepicker';

function DatePickerView(props) {
  const { date, onDateChange } = props
  return(
    <DatePicker
      style={{width: 200}}
      date={date}
      mode="date"
      placeholder="期限を選択"
      format="YYYY-MM-DD"
      confirmBtnText="完了"
      cancelBtnText="キャンセル"
      customStyles={{
        dateIcon: {
          position: 'absolute',
          left: 0,
          top: 4,
          marginLeft: 0,
        },
        dateInput: {
          marginLeft: 36,
        },
      }}
      onDateChange={date => {
        onDateChange(date);
      }}
    />
  )
}

export default DatePickerView;