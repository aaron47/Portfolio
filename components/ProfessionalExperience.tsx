const ProfessionalExperience = () => {
	return (
		<div id="projects" className="w-full">
			<div className="max-w-[1240px] mx-auto py-16">
				<p className="text-[#5651e5] text-xl tracking-widest uppercase">
					Professional Experience
				</p>
				<h2 className="py-4">Companies I have worked at</h2>
				<div className="container mx-auto p-6">
					<ol className="list-none pl-5 space-y-3">
						<li className="p-6 shadow-xl rounded-xl">
							<h2 className="text-xl font-semibold text-gray-700">
								Fullstack Web Developer, Intern - ITGate Sousse
							</h2>
							<p className="text-gray-600">Dec 2022 - Jan 2023</p>
							<p>
								Designed a price comparison application between e-commerce sites
								such as Jumia and Tunisianet using React for the frontend and
								NestJS with MongoDB for the backend, as well as Puppeteer for
								Web Scraping.
							</p>
						</li>
						<li className="p-6 shadow-xl rounded-xl">
							<h2 className="text-xl font-semibold text-gray-700">
								Fullstack Web Developer, Intern - Axam
							</h2>
							<p className="text-gray-600">Feb 2023 - Apr 2023</p>

							<p>
								{' '}
								Worked as a Fullstack Engineer at{' '}
								<a
									href="https://axam.tn"
									className="text-blue-500 hover:text-blue-700">
									Axam:
								</a>
							</p>
							<ul className="list-disc">
								<li>
									{' '}
									Developed different features such as authentication,
									authorization and middlewares both on the frontend using
									NextJS and React and on the backend with the framework ASP
									.NET Core 6 and C#
								</li>
								<li>
									{' '}
									Integrated Azure using Azure Container Instances, Azure App
									Services and Azure Key Vault.{' '}
								</li>
								<li>
									Improved website performance and functionality and code
									refactoring.
								</li>
							</ul>
						</li>
						<li className="p-6 shadow-xl rounded-xl">
							<h2 className="text-xl font-semibold text-gray-700">
								Fullstack Web Developer, Intern - Billcom Consulting
							</h2>
							<p className="text-gray-600">Aug 2023 - Sep 2023</p>

							<ul className="list-disc">
								<li>
									Design and implementation of a customer recovery application
									for a company using ASP .NET Core 7 and Angular.
								</li>
								<li>
									Implemented various features such as username and password
									authentication and authorization, JWT token-based
									authentication and authorization, SMTP email sending and CRON
									jobs with C#
								</li>
								<li>
									Hosted an ASP .NET Core microservice using Azure Container
									Instance
								</li>
							</ul>
						</li>
						<li className="p-6 shadow-xl rounded-xl">
							<h2 className="text-xl font-semibold text-gray-700">
								Full Stack Developer Internship (End of Study Project) - Axam
							</h2>
							<p className="text-gray-600">January 2024 - April 2024</p>

							<ul className="list-disc">
								<li>
									Design and creation of an intelligent search system using
									Elasticsearch, an SBERT model and ASP .NET Core 8
								</li>
								<li>
									Usage of the CQRS pattern and Clean Architecture with ASP .NET
									Core 8.
								</li>
								<li>
									Implementation of several search methods using Artificial
									Intelligence to perform sentence translation and encoding
								</li>
								<li>Vector search integration in Elasticsearch</li>
								<li>
									Hosted the system in Azure Cloud, and the model in an Azure
									Virtual Machine.
								</li>
								<li>Usage of Azure Key Vault to store secret values.</li>
							</ul>
						</li>
					</ol>
				</div>
			</div>
		</div>
	);
};

export default ProfessionalExperience;
