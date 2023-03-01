<main>
	<div class="container">
		<p><b> Contact Us</b></p>

		<div class="content">
			<h1>Get in touch with us</h1>
			<div class="card">
				<div class="addres">
					<i class="fa-solid fa-location-dot" />
					<b
						>Our Head Office Address :<b>
							<p>Garden View Residence,jalan Transmigrasi No.A8 Monjok Timur, Mataram.</p>
						</b></b
					>
				</div>
				<div class="phone">
					<i class="fa-duotone fa-phone-office" />
					<b
						>Call For Help :<b>
							<p>+62 82 340 709 041</p>
						</b></b
					>
				</div>
				<div class="mail">
					<i class="fa-duotone fa-envelopes-bulk" />
					<b
						>Mail Us :<b>
							<p>mail@itvision.co.id</p>
						</b></b
					>
				</div>
			</div>
		</div>

		<div class="form-container">

			<div class="content-form">
				<h3>Start working with Us who can provide everything you need</h3>
				<div class="form">
					<form action="">
						<input type="text" placeholder="Your Name" required />
						<input type="password" placeholder="Your Email" required />
						<input type="text" placeholder="Subject" required />
						<textarea name="" id="" cols="20" rows="5" placeholder="Type your message" />
						<button>send message</button>
					</form>
				</div>
				<div class="map">
					<h3>Maps</h3>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3945.164269010643!2d116.12074221377988!3d-8.58019957258489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dcdc0a8b5eb06c7%3A0xc1711af9da0deb40!2sGarden%20View%20Residence!5e0!3m2!1sid!2sid!4v1677613153842!5m2!1sid!2sid"
						width="100%"
						height="417"
						style="border:1px solid salmon;"
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="maps"
					/>
				</div>
			</div>
		</div>
	</div>
</main>

<style>


	.container b {
		color: var(--primary);
	}
	.content {
		min-height: 100vh;
	}

	.content h1 {
		text-align: center;
		font-size: 3rem;
		font-weight: bold;
	}

	.card {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
		gap: 1rem;
		text-align: center;
	
	}


	.card .addres,
	.card .phone,
	.card .mail {
		background-color: white;
		width: 20rem;
		height: 15rem;
		border-radius: 2px;
		box-shadow: 1px 1px 5px 0 rgb(148, 149, 150);
		padding-top: 3rem;
		cursor: pointer;
	}

	.card .addres:hover,
	.card .phone:hover,
	.card .mail:hover{
		background-color:rgb(146, 144, 144) ;
		opacity: 0.9;
	}

	.card b,
	.card p{
		padding-top: 1rem;
	}

	


	.form-container {
		min-height: 100vh;
	}

	.content-form>h3{
		text-align: center;
		font-weight: bold;
		margin-top: 1rem;
	}

	

	.form button {
		opacity: 0.8;
	}


	.map{
		padding-top: 5rem;
		margin-bottom: 1rem;
	
	}

	.map>h3{
		font-weight: bold;
		color: whitesmoke;
		text-align: center;
		background-color: var(--primary);
		width: 50%;
		margin: auto;
		margin-bottom: 1rem;
		border-radius: 1rem;
	}

	

	@media screen and (max-width: 992px) {
		.form {
			display: flex;
			flex-direction: column;
		}
	}
</style>
