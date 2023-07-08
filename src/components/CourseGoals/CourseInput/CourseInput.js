import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true); //此狀態用於追蹤輸入框中的值是否有效，初始值為 true

  const goalInputChangeHandler = (event) => {
    if(event.target.value.trim().length > 0){ //檢查輸入值是否大於 0。如果大於 0，表示輸入的值有內容，將 isValid 設為 true
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      //檢查 enteredValue 的值是否為空白（空格）或沒有內容
      setIsValid(false); //如果是空白或沒有內容，則將狀態 isValid 設為 false
      return; // return 會提前結束函式的執行，不再繼續執行下面的程式碼
    }
    props.onAddGoal(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid? 'invalid' : ''}`}>
        <label>Course Goal</label>
        <input
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
