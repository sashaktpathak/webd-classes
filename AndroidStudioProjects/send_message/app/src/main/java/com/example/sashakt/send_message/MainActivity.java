package com.example.sashakt.send_message;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.View;
import android.widget.EditText;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
        }
        public void send_msg(View view)
        {
            EditText editText = (EditText) findViewById(R.id.message_box);
            Intent intent = new Intent(Intent.ACTION_SEND);
            //Intent intent = new Intent(this,recieve_mesage.class);
            String message = editText.getText().toString();
            intent.setType("text/plain");
            intent.putExtra(Intent.EXTRA_TEXT,message);
            String chooserTitle = getString(R.string.choosername);
            Intent chooserIntent = Intent.createChooser(intent,chooserTitle);
            startActivity(chooserIntent);
        }
}
