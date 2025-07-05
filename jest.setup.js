beforeAll(() => {
  jest.spyOn(console, "warn").mockImplementation((msg) => {
    if (
      msg.includes("React Router Future Flag Warning") ||
      msg.includes("Relative route resolution")
    ) {
      return;
    }
    console.warn(msg);
  });
});
