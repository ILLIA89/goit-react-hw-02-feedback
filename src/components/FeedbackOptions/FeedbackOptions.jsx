import React from 'react';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onCountOptions }) => {
  return (
    <div className={css.button_div}>
      {options.map(option => (
        <button
          key={option}
          type="button"
          className={`${css.btn} ${css[option]}`}
          onClick={() => {
            onCountOptions(option);
          }}
        >
          {option}
        </button>
      ))}
      ;
    </div>
  );
};
