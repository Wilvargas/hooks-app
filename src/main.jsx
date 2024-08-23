import React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';



// import { HooksApp } from './HooksApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04- useRef/FocusScreen';
// import { ResizeComponent } from './05-useLayoutEffect/ResizeComponent';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
import { CallbackHook } from './06-memos/CallbackHook';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CallbackHook />
  </StrictMode>,
)
