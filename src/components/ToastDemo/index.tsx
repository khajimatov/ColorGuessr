import * as React from 'react';
import * as Toast from '@radix-ui/react-toast';
import './styles.css';

const ToastDemo = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <Toast.Provider swipeDirection="right">
      <button
        className="Button large violet"
        onClick={() => setOpen(true)}
      >
        Add to calendar
      </button>

      <Toast.Root className="ToastRoot" open={open} onOpenChange={setOpen}>
        <Toast.Title className="ToastTitle">Scheduled: Catch up</Toast.Title>
        <Toast.Description asChild>
          <div className="ToastDescription">
            1
          </div>
        </Toast.Description>
        <Toast.Action className="ToastAction" asChild altText="Goto schedule to undo">
          <button className="Button small green">Close</button>
        </Toast.Action>
      </Toast.Root>
      <Toast.Viewport className="ToastViewport" />
    </Toast.Provider>
  );
};

export default ToastDemo;