import {Component} from 'react';
import {Text, TouchableOpacity, View, ViewStyle} from 'react-native';
import {ModelSelect} from './model';

class Selected extends Component<ModelSelect> {
  state: Readonly<{
    isOpen: boolean;
    selectedOption: string | undefined;
  }>;
  constructor(props: ModelSelect) {
    super(props);
    this.state = {
      isOpen: false,
      selectedOption: undefined,
    };
    this.closeDropdown = this.closeDropdown.bind(this);
    this.toggleDropdown = this.toggleDropdown.bind(this);
  }
  closeDropdown() {
    this.setState({isOpen: false});
  }
  toggleDropdown() {
    this.setState((prevState: any) => ({isOpen: !prevState.isOpen}));
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          ...(this.props.styleContainer as ViewStyle),
        }}>
        <Text
          style={{
            fontSize: 17,
            color: '#0e0e0e',
            fontWeight: 'bold',
            marginBottom: 4,
          }}>
          <Text style={{color: 'red'}}>
            {this.props.isRequired ? '* ' : ''}
          </Text>
          {this.props.label}
        </Text>
        <View
          style={{
            flex: 1,
          }}>
          <TouchableOpacity
            onPress={this.toggleDropdown}
            style={{
              paddingTop: 15,
              paddingBottom: 15,
              borderWidth: 1,
              borderColor: 'gray',
              paddingLeft: 12,
              borderRadius: 6,
            }}>
            {this.state.selectedOption && (
              <Text
                style={{
                  fontSize: 17,
                  color: 'black',
                }}>
                {this.state.selectedOption}
              </Text>
            )}
            {!this.state.selectedOption && (
              <Text
                style={{
                  fontSize: 17,
                  color: 'gray',
                }}>
                {this.props.placeholder ?? 'Klik untuk pilih'}
              </Text>
            )}
          </TouchableOpacity>
          {this.state.isOpen && (
            <View
              style={{
                position: 'absolute',
                left: 0,
                flex: 1,
                right: 0,
                top: 55,
                zIndex: 2,
                shadowOffset: {width: 0, height: 2},
                shadowColor: '#000',
                backgroundColor: 'white',
                borderWidth: 1,
                borderColor: '#D3D3D3',
                borderRadius: 6,
              }}>
              {this.props.options.map(option => (
                <TouchableOpacity
                  key={option[this.props.optionKey]}
                  style={{
                    padding: 10,
                    borderBottomWidth: 1,
                    borderBottomColor: '#EEEEEE',
                  }}
                  onPress={() => {
                    this.setState({
                      isOpen: false,
                      selectedOption: option[this.props.optionLabel],
                    });
                    this.props.onSelected(option[this.props.optionKey]);
                  }}>
                  <Text
                    style={{
                      color: 'black',
                      fontWeight: 500,
                    }}>
                    {option[this.props.optionLabel]}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        </View>
      </View>
    );
  }
}

export default Selected;
