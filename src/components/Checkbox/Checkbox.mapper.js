import Checkbox from './Checkbox';

export default config => ({
    children: config.options.map(({label, value}) => (
        <Checkbox value={value} key={value}>{label}</Checkbox>
    )),
});