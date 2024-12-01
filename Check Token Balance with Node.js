app.get('/api/token/balance/:address', async (req, res) => {
    const { address } = req.params;
    const balance = await contract.methods.balanceOf(address).call();
    res.send(`Balance: ${balance} USD`);
});
