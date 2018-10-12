import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'

const ranges = [
  {
    value: '男性',
    label: 'Male  (男性)',
  },
  {
    value: '女性',
    label: 'Female   (女性)',
  },
  {
    value: 'その他',
    label: 'Other   (その他)',
  },
];

export default class Top extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      furigane: '',
      u_name: this.props.u_name,
      d_name: this.props.d_name,
      gender: this.props.gender,
      birthday: this.props.birthday,
      graduate: this.props.graduate,
      birthplace: this.props.birthplace,
      highschool: this.props.highschool,
      licenses: this.props.licenses,
      hobby: this.props.hobby,
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    return (
      <div className="container">
        <h1 className="edit-title">編集フォーム</h1>
        <form className="edit" noValidate autoComplete="off">
          <TextField
            id="standard-require"
            label="Name"
            className="text-field"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="standard-normal"
            label="Furigana(ふりがな)"
            className="text-field"
            value={this.state.furigane}
            onChange={this.handleChange('furigane')}
            margin="normal"
          />
          <TextField
            id="standard-require"
            label="University"
            defaultValue={this.state.u_name}
            onChange={this.handleChange('u_name')}
            className="text-field"
            margin="normal"
          />
          <TextField
            required
            id="standard-required"
            label="Department(学部)"
            defaultValue={this.state.d_name}
            onChange={this.handleChange('d_name')}
            className="text-field"
            margin="normal"
          />
          <TextField
            required
            id="standard-normal"
            label="Subject(学科)"
            defaultValue={this.state.d_name}
            onChange={this.handleChange('d_name')}
            className="text-field"
            margin="normal"
          />
          <TextField
            select
            className="text-field"
            variant="outlined"
            label="Gender(性別)"
            value={this.state.gender}
            onChange={this.handleChange('gender')}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="standard-search"
            label="E-mail"
            type="search"
            className="text-field"
            margin="normal"
          />
          <TextField
            id="standard-dense"
            label="Dense"
            className="text-field dense"
            margin="dense"
          />
          <TextField
            id="standard-multiline-flexible"
            label="Multiline"
            multiline
            rowsMax="4"
            value={this.state.multiline}
            onChange={this.handleChange('multiline')}
            className="text-field"
            margin="normal"
          />
          <TextField
            id="standard-helperText"
            label="Helper text"
            defaultValue="Default Value"
            className="text-field"
            helperText="Some important text"
            margin="normal"
          />
          <TextField
            id="standard-with-placeholder"
            label="With placeholder"
            placeholder="Placeholder"
            className="text-field"
            margin="normal"
          />
          <TextField
            id="standard-textarea"
            label="With placeholder multiline"
            placeholder="Placeholder"
            multiline
            className="text-field"
            margin="normal"
          />
          <TextField
            id="standard-number"
            label="Number"
            value={this.state.age}
            onChange={this.handleChange('age')}
            type="number"
            className="text-field"
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
          />
          <TextField
            id="standard-full-width"
            label="Label"
            style={{ margin: 8 }}
            placeholder="Placeholder"
            helperText="Full width!"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-bare"
            className="text-field"
            defaultValue="Bare"
            margin="normal"
          />
        </form>
      </div>
    )
  }
}
