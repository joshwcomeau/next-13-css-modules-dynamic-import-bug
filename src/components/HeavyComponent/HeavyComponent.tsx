import * as React from 'react';

import styles from './HeavyComponent.module.css';

function HeavyComponent() {
  return (
    <p className={styles.wrapper}>This text should be big and red.</p>
  );
}

export default HeavyComponent;
