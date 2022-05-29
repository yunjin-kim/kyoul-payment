## Kyoul-Pay

### Installing

Using npm;

```
$ npm install kyoul-pay
```

### Example

```
// App.jsx

import { KyoulPayProvider } from 'kyoul-pay';

function App() {
  return (
    <KyoulPayProvider>
        <MainContent />
    </KyoulPayProvider>
  );
}
```

Wheb you want to show payment
```
// someComponent.jsx

import { KyoulPayment } from 'kyoul-pay';

const someComponent = () => {
  const [isOpenPayment, setIsOpenPayment] = useState(true);

  return (
    <>
      // you can give parameter totalAccount, paySuccessUrl, payCancelUrl
      {isOpenPayment && <KyoulPayment totalAccount="3000" paySuccessUrl="success.com" payCancelUrl="cancel.com" />}
    </>
  );
}

```

When you Click Pay Button you can go `success.com` and Click Cancel Button go to `cancel.com`
