<?php
// Check if the form is submitted
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Email parameters
    $to = 'ezeonyekachipaul@gmail.com'; // Change this to your email address
    $subject = 'Contact Form Submission';
    $headers = "From: $name <$email>";
    
    // Compose the email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";
    
    // Send the email
    if (mail($to, $subject, $email_content, $headers)) {
        echo '<p>Your message has been sent successfully. Thank you!</p>';
    } else {
        echo '<p>There was a problem sending your message. Please try again later.</p>';
    }
} else {
    // If the form is not submitted, redirect back to the form page
    header("Location: contact.html");
    exit;
}
?>
