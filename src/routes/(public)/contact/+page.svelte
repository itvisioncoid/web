<main>

<div class="container form">
	<div class="header-contact">
		<h1>Contact With Our Support
            During Emergency!</h1>
        
		<div class="addres-form">
			<h4>Our Head Office Address :</h4>
			<p>Garden View Residence,jalan Transmigrasi No.A8</p>
			<p>Monjok Timur, Mataram.</p>
		</div>

		<div class="call-form">
			<h4>Call For Help :</h4>
			<p>+62 82 340 709 041</p>
		</div>

		<div class="mail-form">
			<h4>Mail Us :</h4>
			<p>mail@itvision.co.id</p>
		</div>
	</div>

	<div class="container-contact">
		<form action="">
			<input type="text" placeholder="Your Name" required />
			<input type="password" placeholder="Your Email" required />
			<input type="text" placeholder="Subject" required />
			<textarea name="" id="" cols="20" rows="5" placeholder="Type your message"/>
			<button>send message</button>
		</form>
	</div>
</div>

</main>

<style>

	.form {
		display: flex;
		justify-content: space-between;
	}

    .header-contact{
        font-family: 'Times New Roman', Times, serif;
    }

	.header-contact > h1 {
        font-weight: bold;
		font-size: 30px;
        color: #fff;
	}

	.addres-form {
		line-height: 1px;
        color: rgb(128, 130, 131);
	}

	.call-form {
		line-height: 1px;
		margin-top: 100px;
        color: rgb(128, 130, 131);

	}

	.mail-form {
		line-height: 1px;
		margin-top: 100px;
        color: rgb(128, 130, 131);

	}
	.container-contact {
		padding-top: 143px;
		max-width: 600px;
		/* margin: auto; */
	}

	button {
		width: 10rem;
		text-align: center;
		float: right;
		border-radius: 5px;
		font-weight: bold;
		padding-bottom: 20px;
	}

    button:hover{
        opacity: 0.8;
    }

	@media screen and (max-width: 992px) {
		.form {
			display: flex;
			flex-direction: column;
		}
	}
</style>
