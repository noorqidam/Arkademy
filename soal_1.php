<?php 
class Biodata
{
	
	public function cetak($name, $age, $address, $hobbies, $is_married, $school, $skills, $interest_in_coding){
		$data 	= [
					'name'		=> $name,
					'age'		=> $age, 
					'address'	=> $address, 
					'hobbies'	=> $hobbies, 
					'is_married'=> $is_married, 
					'list_school'=> $school, 
					'skills' 	=>$skills,
					'interest_in_coding' => $interest_in_coding
				  ];
		return json_encode($data);
	}
}
		$name  			= "Noor Qidam Mujahidin";
		$age			= "25";
		$address  		= "Jln. Mundu Rt 003/04 Kel.Tengah Kec.Kramat Jati Jakarta Timur";
		$hobbies  		= ["Coding","Sepak Bola"];
		$is_married  	= false;
		$school  		= ["Name"=>"University Indraprasta PGRI", "year_in" => "2013", "year_out" => "2017",];
		$skills  		= [
							["Name"=>"HTML5","Level"=>"expert"],
							["Name"=>"CSS3","Level"=>"advanced"],
							["Name"=>"Javascript","Level"=>"advanced"],
							["Name"=>"PHP","Level"=>"advanced"],
							["Name"=>"Bootstrap 4","Level"=>"advanced"],
							["Name"=>"SQL","Level"=>"advanced"]
						  ];
		$interest_in_coding = true;
		$bio 				= new Biodata();
		echo $bio->cetak($name, $age, $address, $hobbies, $is_married, $school, $skills, $interest_in_coding);
 ?>