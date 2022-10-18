import { Button } from 'antd'
import { ProForm, ProFormText } from '@ant-design/pro-components'
function App() {
  return (
    <div className="App">
      <ProForm
        onFinish={async (values) => {
          console.log(values)
        }}
      >
        <ProFormText name="name" label="姓名" />
      </ProForm>
      <Button type="primary">Button</Button>
    </div>
  )
}

export default App
