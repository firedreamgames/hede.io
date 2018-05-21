import React from 'react';
import CategoryIcon from './CategoriesIcons';
import Action from './Button/Action';

const AcceptRules = ({acceptRules}) => (
  <Action
    className="accept-rules-btn"
    primary
    text={'I understand. Proceed'}
    onClick={e => {
      e.preventDefault();
      acceptRules();
    }}
  />
);


export const Rules = ({type, acceptRules, inEditor}) => {
  switch(type) {

    case 'entry':
    return (
      <div className="Editor__rules">
        <h2><CategoryIcon from="from-rules"  type="entry"/> Entry Rules</h2>
        {inEditor ? <p><small><a href="https://hede.io/rules" target="_blank"></a></small></p> : null}
        <ul>
          <li>✅ Please share your knowledge only and directly about the topic.</li>
          <li>✅ You should define tha topic in the first sentence.</li>
          <li>✅ Entries need to be informative and descriptive in order to help readers understand them. Give reasons about your opinions.</li>
          <li>🚫 Don't duplicate another entry's content if you will not add more value into it.</li>
          <li>🚫 Don't respond or comment to another user's entry in your's. To do so, open that entry and write your comment under it.</li>
          <li>🚫 Don't ask questions or request information in the entry.</li>

        </ul>
        <p>Not respecting the rules might result in lower votes or make your hede account suspended.</p>
        {inEditor ? <AcceptRules acceptRules={acceptRules} />  : null}
      </div>
    )
   
  }
};
