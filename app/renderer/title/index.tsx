import React from 'react';
import './index.less';
import Avatar from './avatar.jpg';

interface IProps {
  text: string;
  styles?: React.CSSProperties;
}

function Title({ text, styles }: IProps) {
  return (
    <div style={styles} styleName="title">
      {text}
      <img src={Avatar} />
    </div>
  );
}

export default Title;
