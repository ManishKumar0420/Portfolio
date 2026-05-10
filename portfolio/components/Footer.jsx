export default function Footer() {
  return (
    <footer style={styles.footer}>
      Built with ❤️ by Manish Kumar · {new Date().getFullYear()}
    </footer>
  );
}

const styles = {
  footer: {
    textAlign:   'center',
    padding:     '2rem',
    fontSize:    '12px',
    color:       'var(--muted)',
    fontFamily:  'var(--mono)',
    borderTop:   '1px solid var(--border)',
  },
};
