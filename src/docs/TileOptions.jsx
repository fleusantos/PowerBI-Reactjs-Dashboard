import React, { useState, useEffect } from 'react';
import './custom.scss';
import { defaultOptions } from './utils';
import { renderInput, renderDropdown } from './common';


const TileOptions = (props) => {
    const { options, handleChange, handleSelect } = props;
    const [modes] = useState(defaultOptions['tile'].embedModes);
  
    const onChange = (event) => {
      handleChange(event);
    };
  
    const onSelect = (name) => (option) => {
      handleSelect(name, option);
    };

    return (
        <div>
            {renderDropdown('Mode (optional, default: "view")','reportMode', modes, options['reportMode'], onSelect)}
            {renderInput('Token Type', 'tokenType', options['tokenType'], onChange, true, true)}
            {renderInput('Token', 'accessToken', options['accessToken'], onChange,true)}
            {renderInput('Embed Url', 'embedUrl', options['embedUrl'], onChange,true)}
            {renderInput('Embed Id', 'embedId', options['embedId'], onChange, true)}
            {renderInput('Dashboard ID', 'dashboardId', options['dashboardId'], onChange, true)}
        </div>
      );

}


export default TileOptions;