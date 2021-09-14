import {useState, useReducer} from 'react';
import _ from 'lodash';
import reducer from './components/Form/Form.reducer';
import {Form, Button} from './components';
import structure from './structure.json';

export default function Main() {
    const [value, setValue] = useState(structure.reduce((acc, cur) => {
        _.set(acc, cur.model, cur.default);
        return acc;
    }, {}));
    const [errors, dispatch] = useReducer(reducer, []);

    return (
        <div className='main'>
            <Form value={value} onChange={setValue} structure={structure} dispatch={dispatch}/>
            {<Button onClick={() => errors.length === 0 && console.log(value)} disabled={errors.length > 0}>
                Create
            </Button>}
        </div>
    )
};