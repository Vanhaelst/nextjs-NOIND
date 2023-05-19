export const gtmVirtualPageView = (event, rest) => {
  console.log(event, rest)
  window.dataLayer?.push({
    event,
    ...rest,
  });
};
