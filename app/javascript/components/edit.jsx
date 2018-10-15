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

export default class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: this.props.name,
      /*phonetic: this.props.edit.phonetic,
      department: this.props.edit.department,
      subject: this.props.edit.subject,
      email: this.props.edit.email,
      image: this.props.edit.image,
      facebook: this.props.edit.facebook,
      github: this.props.edit.github,
      twitter: this.props.edit.twitter,
      */
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  handleMessageSubmit = () => {
    $.ajax({
      type: 'PATCH', // HTTPのメソッド
      url: `/tops/1`, // リクエスト先のURL
      dataType: 'json', // リクエストの種類
      contentType: 'application/json', // レスポンスの種類
      data: JSON.stringify({
        name: this.state.name
      }), // 実際に送信するデータ
      beforeSend: function(xhr) {
        xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))
      }
    }).then((response) => {
      const name = response
      this.setState({
        name
      })
    })
  }
  
  render() {
    return (
      <div className="container">
        <h1 className="edit-title">編集フォーム</h1>
        <form className="edit" noValidate autoComplete="off" onSubmit={this.handleMessageSubmit}>
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
            value={this.state.phonetic}
            onChange={this.handleChange('')}
            margin="normal"
          />
          <TextField
            id="standard-require"
            label="University"
            defaultValue={this.state.department}
            onChange={this.handleChange('u_name')}
            className="text-field"
            margin="normal"
          />
          <TextField
            required
            id="standard-required"
            label="Department(学部)"
            defaultValue={this.state.subject}
            onChange={this.handleChange('d_name')}
            className="text-field"
            margin="normal"
          />
          <TextField
            required
            id="standard-normal"
            label="Subject(学科)"
            defaultValue={this.state.email}
            onChange={this.handleChange('d_name')}
            className="text-field"
            margin="normal"
          />
          <TextField
            select
            className="text-field"
            variant="outlined"
            label="Gender(性別)"
            value={this.state.image}
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
            value={this.state.facebook}
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
          <input type="submit" value="Update Post" />
        </form>
      </div>
    )
  }
}
