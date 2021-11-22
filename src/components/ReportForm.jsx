import { Gallery } from './index.js'
import { Form, Input, Button, Select } from 'antd'

const { Option } = Select;
const layout = {
  labelCol: {
    span: 4,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

export const ReportForm = () => {
  const [form] = Form.useForm();


  const onGenderChange = (value) => {
    switch (value) {
      case 'male':
        form.setFieldsValue({
          note: 'Hi, man!',
        });
        return;

      case 'female':
        form.setFieldsValue({
          note: 'Hi, lady!',
        });
        return;

      case 'other':
        form.setFieldsValue({
          note: 'Hi there!',
        });
    }
  };

  const onFinish = (values) => {
    console.log(values);
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFill = () => {
    form.setFieldsValue({
      note: 'Hello world!',
      gender: 'male',
    });
  };

  return (
    <div>
      <div>
        <Form {...layout} style={{paddingTop: '5rem'}} form={form} name="control-hooks" onFinish={onFinish}>
          <Form.Item
            name="note"
            label="Note"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="gender"
            label="Gender"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a option and change input text above"
              onChange={onGenderChange}
              allowClear
            >
              <Option value="male">male</Option>
              <Option value="female">female</Option>
              <Option value="other">other</Option>
            </Select>
          </Form.Item>
          <Form.Item
            noStyle
            shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
          >
            {({ getFieldValue }) =>
              getFieldValue('gender') === 'other' ? (
                <Form.Item
                  name="customizeGender"
                  label="Customize Gender"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
              ) : null
            }
          </Form.Item>

          <Form.Item
            name="type"
            label="Type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Report the type of Gender based violence"
              // onChange={onGenderChange}
              allowClear
            >
              <Option value="psychological violence">Psychological Violence</Option>
              <Option value="stalking">Stalking</Option>
              <Option value="physical violence">physical violence</Option>

              <Option value="forced marriages ">forced marriages </Option>
              <Option value="sexual violence, including rape">sexual violence, including rape</Option>
              <Option value="female genital mutilation">female genital mutilation</Option>

              <Option value="forced marriages ">forced marriages </Option>
              <Option value="sexual violence, including rape">sexual violence, including rape</Option>
              <Option value="forced abortion and forced sterilisation">forced abortion and forced sterilisation</Option>

              <Option value="sexual harassment ">sexual harassment </Option>
              <Option value="aiding or abetting and attempt">aiding or abetting and attempt</Option>
              <Option value="unacceptable justifications for crimes, including crimes committed in the name of so-called honour ">unacceptable justifications for crimes, including crimes committed in the name of so-called honour </Option>
            </Select>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Reset
            </Button>
            <Button type="link" htmlType="button" onClick={onFill}>
              Fill form
            </Button>
          </Form.Item>
        </Form>

      </div>

      <div>
        <Gallery />
      </div>
    </div>
  )
}
