import React, { Component } from 'react'
import MenuItem from '@material-ui/core/MenuItem'
import TextField from '@material-ui/core/TextField'
import InputAdornment from '@material-ui/core/InputAdornment'
import $ from 'jquery'

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
      name: '',
      furigana: '',
      university: '',
      department: '',
      subject: '',
      graduate_year: '',
      email: '',
      tel: '',
      github: '',
      facebook: '',
      twitter: '',
    };
  }
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  
  handleSubmit = event => {
    //event.preventDefalut();
    console.log("form ok")
    this.handleMessageSubmit({name: this.state.name, furigana: this.state.furigana, university: this.state.university, department: this.state.department, subject: this.state.subject, graduate_year: this.state.graduate_year, email: this.state.email, tel: this.state.tel, github: this.state.github, facebook: this.state.facebook, twitter: this.state.twitter})
    console.log("form success")
  }
  handleMessageSubmit(message) {
    console.log(message)
    $.ajax({
        url: "/bases/1",
        dataType: 'json',
        type: 'PATCH',
        data: message,
        success: function(message) {
          window.location.href = '/'
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString())
        }.bind(this)
      })
  }
  componentDidMount() {
      $.ajax({
        url: "/bases/1",
        dataType: 'json',
        cache: false,
        success: function(message) {
          this.setState({ name: message.name, furigana: message.furigana, university: message.university, department: message.department, subject: message.subject, graduate_year: message.graduate_year, email: message.email, tel: message.tel, github: message.github, facebook: message.facebook, twitter: message.twitter })
          console.log("success")
        }.bind(this),
        error: function(_xhr, status, err) {
          console.error(this.props.url, status, err.toString())
        }.bind(this)
      })
    }
  
  render() {
    return (
      <div className="container">
        <h1 className="edit-title">編集フォーム</h1>
        <form className="edit" noValidate autoComplete="off" onSubmit={this.handleMessageSubmit}>
          <TextField
            required
            id="standard-required"
            label="Name"
            className="text-field"
            type="search"
            value={this.state.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          
          <TextField
            id="standard-normal"
            label="Furigana(ふりがな)"
            className="text-field"
            type="search"
            value={this.state.furigana}
            onChange={this.handleChange('furigana')}
            margin="normal"
          />
          <TextField
            required
            id="standard-required"
            label="University"
            type="search"
            value={this.state.university}
            onChange={this.handleChange('university')}
            className="text-field"
            margin="normal"
          />
          <TextField
            required
            id="standard-required"
            label="Department(学部)"
            type="search"
            value={this.state.department}
            onChange={this.handleChange('department')}
            className="text-field"
            margin="normal"
          />
          <TextField
            required
            id="standard-required"
            label="subject(学科)"
            type="search"
            value={this.state.subject}
            onChange={this.handleChange('subject')}
            className="text-field"
            margin="normal"
          />
          <TextField
            required
            id="standard-required"
            label="Graduate Year(卒業年度)"
            type="search"
            value={this.state.graduate_year}
            onChange={this.handleChange('graduate_year')}
            className="text-field"
            margin="normal"
          />
          {/*
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
        */}
          <TextField
            id="standard-search"
            label="Email"
            type="search"
            value={this.state.email}
            onChange={this.handleChange('email')}
            className="text-field"
            margin="normal"
          />
          <TextField
            id="standard-dense"
            label="Telephone"
            type="search"
            value={this.state.tel}
            onChange={this.handleChange('tel')}
            className="text-field dense"
            margin="dense"
          />
          <TextField
            id="standard-full-width"
            label="Facebook Link"
            type="search"
            style={{ margin: 8 }}
            placeholder="https://www.facebook.com/"
            fullWidth
            value={this.state.facebook}
            onChange={this.handleChange('facebook')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Github Link"
            type="search"
            style={{ margin: 8 }}
            placeholder="https://github.com/"
            fullWidth
            value={this.state.github}
            onChange={this.handleChange('github')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            id="standard-full-width"
            label="Twitter Link"
            type="search"
            style={{ margin: 8 }}
            placeholder="https://twitter.com/"
            fullWidth
            value={this.state.twitter}
            onChange={this.handleChange('twitter')}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
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
            id="standard-bare"
            className="text-field"
            defaultValue="Bare"
            margin="normal"
          />
          <input type="submit" value="Update Post" onClick={this.handleSubmit} />
        </form>
      </div>
    )
  }
}
