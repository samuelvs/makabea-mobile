import { StyleSheet } from 'react-native';
import { colors, general } from '~/styles';

const styles = StyleSheet.create({
  ...general.formStyles,
  ...general.buttonStyles,

  background: {
    flex: 1
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
    padding: 30,
  },

  title: {
    fontSize: 28,
    marginBottom: 20,
    color: colors.white,
    textAlign: 'center',
  },

  label: {
    color: colors.white
  },

  errorText: {
    textAlign: 'center',
    color: '#ce2029',
    fontSize: 16,
    marginBottom: 15,
    marginHorizontal: 20,
  },

  linkButton: {
    padding: 10,
    marginTop: 20
  },

  linkText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  }
});

export default styles;