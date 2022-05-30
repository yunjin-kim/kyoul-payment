## Kyoul-Pay

### Installing

Using npm;

```
$ npm install kyoul-pay
```

<br/>

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

<br/>

When you want to show payment
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

<br/>

### Demo

https://yunjin-kim.github.io/kyoul-payment/
