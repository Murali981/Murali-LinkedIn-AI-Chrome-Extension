export default defineBackground(() => {
  console.log("Hello background! provided by Murali J", {
    id: browser.runtime.id,
  });
});
