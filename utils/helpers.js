module.exports = {
    format_date: (date) => {
      // Format date as MM/DD/YYYY
      return date.toLocaleDateString();
    },

    format_price: (price) => {
      price = parseFloat(price);

      if (price < 10.00) {
        return "$";
      } else if ((price >= 10.00) && (price < 25.00)) {
        return "$$";
      }else if ((price >= 25.00) && (price < 50.00)) {
        return "$$$";
      } else {
        return "$$$$";
      }

    }
  };