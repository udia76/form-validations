import Item from './DropDown.item';

export default config => ({
    children: config.options.map(({label, value}) => (
        <Item value={value} key={value}>{label}</Item>
    )),
});