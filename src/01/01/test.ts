const flags = {
	dynamic: true,
	tree: false
};

(Object.keys(flags) as Array<keyof typeof flags>).forEach((key) => {
	flags[key] = true;
});
