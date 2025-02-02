export default function format(string, action) {
    switch (action) {
      case 'lowercase':
        return string.toLowerCase();

      case 'uppercase':
        return string.toUpperCase();
    }
  }